// import { useRouter } from "next/router";
// import { sanityFetch } from "@/sanity/lib/live"; // Import your sanity fetch function
// import { chefQuery } from "@/sanity/lib/queries"; // Import the chef query
// import React, { useEffect, useState } from "react";

// // Define Types for the Chef Data
// type Chef = {
//   _id: string;
//   name: string;
//   position: string;
//   experience: number;
//   specialty: string;
//   imageUrl: string;
//   description: string;
//   available: boolean;
// };

// export default function ChefDetails() {
//   const router = useRouter();
//   const { id } = router.query; // Extract `id` from the URL params
//   const [chef, setChef] = useState<Chef | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   useEffect(() => {
//     // Ensure that the `id` is present before making the fetch request
//     if (id) {
//       setIsLoading(true);
//       // Fetch the chef data based on the ID
//       const fetchChef = async () => {
//         try {
//           const result = await sanityFetch({
//             query: chefQuery,
//             params: { id }, // Pass the dynamic `id` as a query parameter
//           });
//           setChef(result?.data || null); // Update state with the fetched data
//         } catch (error) {
//           console.error("Error fetching chef details:", error);
//         } finally {
//           setIsLoading(false);
//         }
//       };

//       fetchChef();
//     }
//   }, [id]); // Re-run the effect when the `id` changes

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : chef ? (
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-6">{chef.name}</h1>
//           <img
//             src={chef.imageUrl}
//             alt={chef.name}
//             className="w-48 h-48 rounded-full object-cover mx-auto mb-6"
//           />
//           <p className="text-xl font-semibold">{chef.position}</p>
//           <p className="mt-4 text-gray-600">{chef.description}</p>
//           <p className="mt-2 text-gray-500">{chef.specialty}</p>
//           <p className="mt-2 text-gray-700">
//             {chef.experience} years of experience
//           </p>
//           <p
//             className={`mt-2 text-lg font-bold ${
//               chef.available ? "text-green-500" : "text-red-500"
//             }`}
//           >
//             {chef.available ? "Available" : "Not Available"}
//           </p>
//         </div>
//       ) : (
//         <p>Chef not found</p>
//       )}
//     </div>
//   );
// }
