import { CountrySelectedProvider } from '@/providers';
import Table from '@/components/utils/Table';
import { SearchAutocomplete, Statistics } from '@/components/utils';
import { getAllCountries, getWinningCountry } from '@/lib/functions';

export default async function GuessCountryPage() {

  const countries = (await getAllCountries());
  const win = await getWinningCountry();
  // console.log(win, win)

  return (
    <CountrySelectedProvider>
      <Statistics />
      <SearchAutocomplete countries={countries} />
      <main
        className="flex items-center flex-col justify-center my-8 mx-auto"
      >
        <Table country={win} />
      </main>
      <article
        className='mx-auto w-[80rem] max-w-[90%] text-slate-200 prose'
      >
        <h1>Countries DLE – A Geography Word Game for Travel Lovers and Puzzle Fans</h1>

        <p>
          Have you ever dreamed of traveling around the world without leaving your home?
          Are you fascinated by geography, flags, capitals, and country shapes? Or maybe youre a fan of puzzles,
          word games, and brain teasers? If you answered yes to any of those questions,
          the <strong>Countries DLE</strong> app is made for you.
        </p>

        <p>
          <strong>Countries DLE</strong> is an innovative game inspired by the popular Wordle format — but instead
          of guessing words, youre challenged to guess <strong>country names</strong>. Each day, you get
          <strong>one chance</strong> to solve a geographic riddle. Simple in concept, but surprisingly addictive,
          this app has become a favorite among students, teachers, and adults looking for smart entertainment
          and a daily mental workout.
        </p>

        <h3>How It Works</h3>

        <p>
          Gameplay in Countries DLE follows the familiar Wordle-style mechanics: you have a set number of tries
          (usually 6) to guess the correct country. After each guess, the game provides clues to help guide you
          toward the right answer:
        </p>
        <ul>
          <li><strong>Distance</strong> – tells you how far your guess is from the correct country.</li>
          <li><strong>Direction</strong> – a directional arrow points where to move on the map.</li>
          <li><strong>Accuracy</strong> – a percentage shows how close you are to the target.</li>
        </ul>

        <p>
          Its not just a game — its also a <strong>learning experience</strong>, helping to improve your
          geographic awareness and spatial reasoning. With each daily challenge, your knowledge of the world grows,
          and playing becomes a rewarding habit.
        </p>

        <h3>Game Modes</h3>

        <ul>
          <li><strong>Daily Challenge</strong> – one country to guess each day, the same for all players worldwide.</li>
          <li><strong>Free Play Mode</strong> – unlimited gameplay with random countries to guess.</li>
          <li>
            <strong>Educational Mode</strong> – perfect for students and teachers. After each game, additional info appears:
            flag, capital, population, continent, official languages, and fun facts.
          </li>
          <li><strong>Themed Challenges</strong> – guess countries from specific continents or regions.</li>
        </ul>

        <h3>Features</h3>

        <ul>
          <li><strong>Autocomplete and Suggestions</strong> – smart input helps with country name spelling.</li>
          <li><strong>Statistics and Achievements</strong> – track wins, streaks, average distances, and more.</li>
          <li><strong>Interactive World Map</strong> – view guesses and compare with the correct location.</li>
          <li><strong>Global Leaderboards</strong> – see how you rank among other players.</li>
          <li><strong>Learning Tools</strong> – useful for teachers and geography classes.</li>
        </ul>

        <h3>Who Is It For?</h3>

        <ul>
          <li><strong>Students and learners</strong> – reinforce geography in a fun way.</li>
          <li><strong>Teachers</strong> – use as a classroom activity or homework challenge.</li>
          <li><strong>Families</strong> – play together and learn as a group.</li>
          <li><strong>Travel lovers</strong> – explore new countries daily.</li>
          <li><strong>Puzzle fans</strong> – perfect for Wordle-style logic game enthusiasts.</li>
        </ul>

        <h3>Why Play Countries DLE?</h3>

        <p>
          By playing Countries DLE daily, you:
        </p>
        <ul>
          <li>Reinforce and expand your geographic knowledge</li>
          <li>Sharpen logical thinking and deduction</li>
          <li>Learn fun facts about countries</li>
          <li>Train spatial awareness</li>
          <li>Practice English spelling of country names</li>
        </ul>

        <p>
          It’s the perfect balance of <strong>education and entertainment</strong> — a smart way to relax while learning something new.
        </p>

        <h3>Availability</h3>

        <ul>
          <li><strong>Web version</strong> – play directly in your browser (desktop, tablet, or mobile).</li>
          <li><strong>Mobile apps</strong> – Android and iOS versions available, with daily reminders.</li>
        </ul>

        <h3>Conclusion</h3>

        <p>
          <strong>Countries DLE</strong> is a modern word-and-knowledge game that entertains, educates, and challenges you.
          With a clean interface, engaging mechanics, and meaningful learning, it’s the perfect daily brain game
          for curious minds of all ages.
        </p>

        <p>
          So if you want to test your world knowledge, take on daily puzzles, and discover something new every day —
          <strong>Countries DLE is waiting for you</strong>.
        </p>
      </article>
    </CountrySelectedProvider>
  )
}