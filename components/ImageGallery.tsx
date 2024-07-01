// "use client";

// import Image from "next/image";
// import { urlFor } from "../app/lib/sanity";
// import { useState } from "react";

// interface iAppProps {
//   images: any;
// }

// export default function ImageGallery({ images }: iAppProps) {
//   const [bigImage, setBigImage] = useState(images[0]);

//   const handleSmallImageClick = (image: any) => {
//     setBigImage(image);
//   };
//   return (
//     <div className="grid gap-4 lg:grid-cols-5">
//       <div className="order-last flex gap-4 lg:order-none lg:flex-col">
//         {images.map((image: any, idx: any) => (
//           <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
//             <Image
//               src={urlFor(image).url()}
//               width={200}
//               height={200}
//               alt="photo"
//               className="h-full w-full object-cover object-center cursor-pointer"
//               onClick={() => handleSmallImageClick(image)}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
//         <Image
//           src={urlFor(bigImage).url()}
//           alt="Photo"
//           width={500}
//           height={500}
//           className="h-full w-full object-cover object-center"
//         />

//         <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
//           Sale
//         </span>
//       </div>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import { urlFor } from "../app/lib/sanity";
// import { useState } from "react";

// interface iAppProps {
//   images: any[];
// }

// export default function ImageGallery({ images }: iAppProps) {
//   const [bigImage, setBigImage] = useState(images[0]);

//   const handleSmallImageClick = (image: any) => {
//     setBigImage(image);
//   };

//   if (!images || images.length === 0) {
//     return <div>No images available</div>;
//   }

//   return (
//     <div className="grid gap-4 lg:grid-cols-5">
//       <div className="order-last flex gap-4 lg:order-none lg:flex-col">
//         {images.map((image: any, idx: any) => (
//           <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
//             <Image
//               src={urlFor(image).url()}
//               width={200}
//               height={200}
//               alt="photo"
//               className="h-full w-full object-cover object-center cursor-pointer"
//               onClick={() => handleSmallImageClick(image)}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
//         <Image
//           src={urlFor(bigImage).url()}
//           alt="Photo"
//           width={500}
//           height={500}
//           className="h-full w-full object-cover object-center"
//         />

//         <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
//           Sale
//         </span>
//       </div>
//     </div>
//   );
// }


import Image from "next/image";

interface ImageGalleryProps {
  images: { _type: string; _key: string; url: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <Image
          key={image._key}
          src={image.url}
          alt="Product Image"
          width={500}
          height={500}
          className="product-image"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
