/**
 * Age and Historical Events Calculator Lab Instructions
 * ------------------------------------------------------
 *
 * Goal:
 * - Your task is to create an Age and Historical Events Calculator. This form allows users to input their name and date of birth. The application calculates their current age, the days until their next birthday, and displays a significant historical event from their birth year.
 *
 * Key Functions to Implement:
 * 1. User should be able to input their name and date of birth.
 * 2. Validate the date of birth input to ensure it matches the MM/DD/YYYY format. Use regular expressions for validation. Another way to define regex is using the 'new RegExp' constructor.
 * 3. Output the user's age in years and the number of days until their next birthday. Utilize the 'getFullYear', 'getMonth', and 'getDate' methods from the Date object.
 * 4. Extract and display a historical event corresponding to the user's year of birth. Use regular expressions to search within a provided string of historical events.
 *
 * Note:
 * - Implement custom validation for the date of birth input field to ensure the format is correct before processing.
 * - The string containing historical events from the years 1900 to 2023 is provided. Use the Date object methods and regular expressions to extract and display the event for the user's year of birth.
 *
 * Example Link:
 * https://65ea6f832e9af41b9a5018eb--gentle-brioche-05a576.netlify.app/
 *
 * Good luck!
 */

const historicalEvents =
  "1900: Zeppelin's first successful flight; 1901: Marconi's transatlantic wireless transmission; 1902: Air conditioning invented by Willis Carrier; 1903: The Wright brothers' first powered flight; 1904: Fleming invents the vacuum diode; 1905: Albert Einstein's theory of special relativity; 1906: The first radio broadcast of audio; 1907: Color photography invented; 1908: Model T Ford introduced; 1909: Instant coffee invented; 1910: Neon signs first used commercially; 1911: Discovery of superconductivity; 1912: The Titanic's wireless communications; 1913: The assembly line perfected by Henry Ford; 1914: The Panama Canal completed; 1915: The first transcontinental telephone call; 1916: The tank invented; 1917: Introduction of synthetic rubber; 1918: The superheterodyne radio circuit invented; 1919: The flip-flop circuit, fundamental for electronic digital computers, invented; 1920: The first commercial radio broadcast; 1921: The lie detector invented; 1922: The first insulin treatment for diabetes; 1923: The first portable radio; 1924: The first photoelectric cell; 1925: The first television system by John Logie Baird; 1926: The first liquid-fueled rocket; 1927: The first electronic television; 1928: Penicillin discovered by Alexander Fleming; 1929: The color television invented; 1930: The frozen food process patented by Clarence Birdseye; 1931: The electron microscope invented; 1932: The first pacemaker designed; 1933: FM radio patented; 1934: The first xerographic copy made; 1935: Radar technology developed; 1936: The first programmable computer, Z1; 1937: The jet engine invented; 1938: The ballpoint pen invented; 1939: The first helicopter flight; 1940: The first color photograph; 1941: The first commercial computer, Z3, operational; 1942: The Manhattan Project begins; 1943: The discovery of streptomycin; 1944: The first kidney dialysis machine used; 1945: The atomic bomb developed; 1946: The ENIAC computer introduced; 1947: The invention of the transistor; 1948: The invention of Velcro; 1949: The first networked computer, EDVAC; 1950: The first credit card introduced; 1951: The first commercial computer, UNIVAC I, introduced; 1952: The first hydrogen bomb detonated; 1953: The structure of DNA discovered; 1954: The solar cell invented; 1955: The first polio vaccine introduced; 1956: The first hard disk drive, IBM 305 RAMAC; 1957: The launch of Sputnik 1; 1958: The integrated circuit invented; 1959: The first photocopier introduced; 1960: The first working laser demonstrated; 1961: Yuri Gagarin becomes the first human in space; 1962: The first communications satellite, Telstar; 1963: The first video game console, Magnavox Odyssey; 1964: The first bullet train in Japan; 1965: The first spacewalk; 1966: The first credit card scanner; 1967: The first heart transplant; 1968: The first computer mouse introduced; 1969: The first human lands on the Moon; 1970: The first digital camera invented; 1971: The first email sent; 1972: The first video game console, the Magnavox Odyssey; 1973: The first mobile phone, Motorola DynaTAC, released; 1974: The Rubik's Cube invented; 1975: The first personal computer, the Altair 8800, introduced; 1976: The first commercial Concorde flight; 1977: The first home computer, Apple II, released; 1978: The first GPS satellite launched; 1979: The Walkman introduced by Sony; 1980: The first MRI scanner used clinically; 1981: The Space Shuttle launched for the first time; 1982: The first CD produced; 1983: The Internet's Domain Name System introduced; 1984: The first Apple Macintosh computer released; 1985: The first version of Windows, Windows 1.0, released; 1986: The first PC virus, Brain, detected; 1987: The first fluorescent lamp; 1988: The first Internet worm, the Morris Worm; 1989: The World Wide Web proposed by Tim Berners-Lee; 1990: The Hubble Space Telescope launched; 1991: The first web browser, WorldWideWeb, invented; 1992: The first smartphone, IBM Simon, introduced; 1993: The World Wide Web goes public; 1994: The first satellite digital television service launched; 1995: The DVD introduced; 1996: The first successful cloning of a mammal, Dolly the sheep; 1997: The first MP3 player introduced; 1998: Google founded; 1999: The Blackberry smartphone introduced; 2000: The Human Genome Project draft completed; 2001: The first iPod released; 2002: The first commercial quantum computer by D-Wave Systems; 2003: The Human Genome Project completed; 2004: Facebook founded; 2005: The video-sharing website YouTube launched; 2006: The first tweet on Twitter; 2007: The first iPhone released; 2008: The Large Hadron Collider operational; 2009: Bitcoin created; 2010: The iPad introduced by Apple; 2011: The first wearable fitness tracker, Fitbit; 2012: CRISPR gene editing technology revolutionizes biology; 2013: The first lab-grown burger cooked; 2014: The first 3D-printed car produced; 2015: The first self-driving cars on public roads; 2016: The first virtual reality headsets released; 2017: The first reusable rocket by SpaceX; 2018: The first gene-edited babies reported; 2019: The first image of a black hole captured; 2020: mRNA vaccines developed for COVID-19; 2021: The first flight on another planet (Mars helicopter Ingenuity); 2022: The James Webb Space Telescope launched; 2023: Quantum supremacy claimed by multiple computing companies.";

let name = document.getElementById("name");
let dob = document.getElementById("dob");
let submit = document.querySelector("button");
let results = document.getElementById("results");

submit.addEventListener("click", function () {
  try {
    let birthYear = dob.value;
    let isValidFormat = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/.test(birthYear);
  if (!isValidFormat) {
    throw new Error("Please enter the date in MM/DD/YYYY format");
  }
  }
  catch (error) {
    alert(error.message);
  } 
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  let age = ((currentDate - birthYear) / 1000 / 60 / 60 / 24);
  console.log(age);
  results.innerText = 'Age: ' + age + ' years';
})