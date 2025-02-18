import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TripUpdateInput = {
  listing?: ListingWhereUniqueInput;
  tripinfo?: string;
  user?: UserWhereUniqueInput;
};
