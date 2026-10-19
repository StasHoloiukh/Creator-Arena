import { NextResponse } from "next/server";

export interface ImageKitFile {
  fileId: string;
  name: string;
  filePath: string;
  url: string;
  thumbnailUrl: string;
  height?: number;
  width?: number;
}

export async function GET() {
  try {
    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    const urlEndpoint =
      process.env.IMAGEKIT_URL_ENDPOINT ||
      process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ||
      "https://ik.imagekit.io/creatorArena";

    if (!privateKey) {
      return NextResponse.json(
        {
          error: "IMAGEKIT_PRIVATE_KEY is not defined in environment variables",
          images: [],
          urlEndpoint,
        },
        { status: 500 }
      );
    }

    const auth = Buffer.from(`${privateKey}:`).toString("base64");
    const response = await fetch("https://api.imagekit.io/v1/files?fileType=image&limit=30", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
      next: { revalidate: 15 },
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("ImageKit API error:", response.status, errText);
      return NextResponse.json(
        {
          error: `ImageKit API responded with status ${response.status}`,
          images: [],
          urlEndpoint,
        },
        { status: response.status }
      );
    }

    const files = await response.json();
    const images: ImageKitFile[] = (Array.isArray(files) ? files : [])
      .filter((file) => file.fileType === "image" || !file.fileType)
      .map((file) => ({
        fileId: file.fileId,
        name: file.name,
        filePath: file.filePath,
        url: file.url,
        thumbnailUrl: file.thumbnail || file.url,
        height: file.height,
        width: file.width,
      }));

    return NextResponse.json({
      images,
      urlEndpoint,
      count: images.length,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch images from ImageKit";
    console.error("Error fetching images from ImageKit:", error);
    return NextResponse.json(
      { error: message, images: [] },
      { status: 500 }
    );
  }
}
