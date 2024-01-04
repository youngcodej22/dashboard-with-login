import mongoose from "mongoose";

const AffiliateStatSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);

// AffiliateStat.findById(
//   { _id: { $exists: true } },
//   function (err, affiliatestat) {
//     if (err) return console.error(err);
//   }
// );

// AffiliateStat.exists({ _id: "6371251df03239e680000033" }, function (err, doc) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Result", doc);
//   }
// });

export default AffiliateStat;
