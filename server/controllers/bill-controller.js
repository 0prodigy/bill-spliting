const User = require("../models/User");

const calculateBillSplit = (bill) => {
  const people = Object.keys(bill);
  const valuesPaid = Object.values(bill);

  const sum = valuesPaid.reduce((acc, curr) => curr + acc);
  const mean = sum / people.length;

  const sortedPeople = people.sort((a, b) => bill[a] - bill[b]);
  const sortedAmount = sortedPeople.map((user) => bill[user] - mean);

  let i = 0;
  let j = sortedPeople.length - 1;
  let owe;

  let splitedBill = [];

  while (i < j) {
    owe = Math.min(-sortedAmount[i], sortedAmount[j]);
    sortedAmount[i] += owe;
    sortedAmount[j] -= owe;

    splitedBill.push({
      from: sortedPeople[i],
      to: sortedPeople[j],
      amount: owe.toFixed(2),
    });

    if (sortedAmount[i] === 0) {
      i++;
    }

    if (sortedAmount[j] === 0) {
      j--;
    }
  }
  return splitedBill;
};

const splitBill = async (req, res) => {
  const { bill, userId, note, totalAmount } = req.body;

  try {
    let user = await User.findOne({ id: userId });
    if (user) {
      const calculatedBill = calculateBillSplit(bill);
      user.history.unshift({
        note: note,
        totalAmount: totalAmount,
        bill: calculatedBill,
      });
      await user.save();
      return res.status(200).json({
        err: false,
        message: "Bill Updated successfully",
        bill: calculatedBill,
      });
    } else {
      return res.status(404).json({ err: true, message: "User Not found" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: true, message: "Something went wrong" });
  }
};

module.exports = { splitBill };
