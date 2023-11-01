import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, numCabins }) {
  // stat 1
  const numBookings = bookings.length;

  // stat 2
  const totalSales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // stat 3
  const checkIns = confirmedStays.length;

  // stat 4
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * numCabins);
  return (
    <>
      <Stat
        title="bookings"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
        color="blue"
      />
      <Stat
        title="sales"
        value={formatCurrency(totalSales)}
        icon={<HiOutlineBanknotes />}
        color="green"
      />
      <Stat
        title="Check ins"
        value={checkIns}
        icon={<HiOutlineCalendarDays />}
        color="indigo"
      />
      <Stat
        title="occupancy rate"
        value={Math.round(occupation * 100)}
        icon={<HiOutlineChartBar />}
        color="yellow"
      />
    </>
  );
}

export default Stats;
