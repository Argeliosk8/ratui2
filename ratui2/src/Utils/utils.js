

export function formatDate(dateString) {
    // Parse the date string into a Date object, ensuring it is treated as local time
    const dateParts = dateString.split("-");
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Month is zero-based
    const day = parseInt(dateParts[2], 10);
  
    const date = new Date(year, month, day);
  
    // Get the day of the week (Mon, Tue, Wed, etc.)
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = daysOfWeek[date.getDay()];
  
    // Get the month (1-12)
    const displayMonth = date.getMonth() + 1;
  
    // Get the day of the month (1-31)
    const dayOfMonth = date.getDate();
  
    // Format and return the date as "Mon 7/8"
    return `${dayOfWeek} ${displayMonth}/${dayOfMonth}`;
  }


  export function getWeekDateRangeAndDays(weekString) {
    const [year, week] = weekString.split('-W').map(Number);
  
    // Calculate the first day of the year
    const firstDayOfYear = new Date(year, 0, 1);
  
    // Calculate the day of the first Monday of the year
    const firstMonday = new Date(firstDayOfYear);
    firstMonday.setDate(firstDayOfYear.getDate() + (1 - firstDayOfYear.getDay()) + 7 * (firstDayOfYear.getDay() === 0 ? 1 : 0));
  
    // Calculate the start date of the specified week
    const startDate = new Date(firstMonday);
    startDate.setDate(firstMonday.getDate() + (week - 1) * 7);
  
    // Function to format the date as "YYYY-MM-DD" with leading zeros
    const formatDate = (date) => {
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    };
  
    // Create an array of all days in the week
    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      daysOfWeek.push(formatDate(currentDate));
    }
  
    return {
      start: daysOfWeek[0],
      end: daysOfWeek[6],
      days: daysOfWeek
    };
  }

  export function getCurrentWeek() {
    const currentDate = new Date();
    const startYear = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor((currentDate - startYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((currentDate.getDay() + 1 + days) / 7);
    const year = currentDate.getFullYear();
    return `${year}-W${String(weekNumber).padStart(2, '0')}`;
  }
  