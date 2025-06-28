import { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";
export default function useWishlist() {
  return useContext(WishlistContext);
}