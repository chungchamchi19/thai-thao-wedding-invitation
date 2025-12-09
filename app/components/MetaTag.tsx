"use client";

import { usePathname } from "next/navigation";

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function MetaTags({
  title = "Wedding Invitation of Thái and Thảo",
  description = "Dear bạn, hope you're ready for something awesome!",
  image = "https://thai-thao-wedding-invitation.vercel.app/assets/images/vvvv.jpg",
}: MetaTagsProps) {
  const pathname = usePathname();
  const url = `https://thai-thao-wedding-invitation.vercel.app${pathname}`;

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Wedding Invitation of Thái and Thảo" />

      {/* Twitter (optional) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
