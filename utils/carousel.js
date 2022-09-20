export async function carousel() {
  const weekCarousel = document.getElementById("week_carousel");
  const monthDay = (
    await fetch("https://community.openproject.org/api/v3/days")
  ).json();
  console.log(monthDay);
  for (let i = 1; i <= monthDay.length; i++) {
    const day = document.createElement("div");
    day.className = `w-3/12 mx-[40px] my-[30px]`;
    day.innerText = i;
    weekCarousel.append(day);
  }
}
