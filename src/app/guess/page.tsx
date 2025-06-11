import { GuessCountry } from '@/components/client';
import { Results } from '@/components/views/guess';
import { CountrySelectedProvider } from '@/providers';
import getAllCountries from '@/lib/functions/getAllCountries';
import getWinningCountry from '@/lib/functions/getWinningCountry';

export default async function GuessCountryPage() {

  const countries = await getAllCountries();
  const country = await getWinningCountry('poland')

  console.log('single country', country)

  return (
    <CountrySelectedProvider>
      <main
        className="flex items-center flex-col justify-center my-8 mx-auto bg-amber-500/0"
      >
        <h1>Guess country</h1>
        {/* <audio controls autoPlay >
          <source src='https://nationalanthems.info/ru.mp3' type='audio/mpeg' />
        </audio> */}
        <GuessCountry countries={countries} />
        <Results />
        <p className="mx-auto text-md text-slate-700 w-[90rem] max-w-[70%] my-8 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nihil optio quos, impedit, earum, dolores facilis illum exercitationem recusandae libero dolore! Voluptates nostrum, quae nobis reiciendis dolorem deserunt mollitia cupiditate.
          Distinctio nulla corporis, nesciunt sequi magnam consequuntur eveniet assumenda, rerum illum eligendi, itaque eaque modi. Maiores, quibusdam. Est, distinctio inventore tempore reiciendis pariatur eveniet in fugit qui quasi facilis voluptate?
          Ea consequuntur sunt inventore minima nesciunt? Corrupti, culpa dolore, quis aliquam quisquam aliquid esse cumque id asperiores, aperiam porro quos sapiente consequuntur adipisci tempore. Dolorem vitae doloribus accusamus laudantium reprehenderit.
          Perferendis dicta nesciunt expedita quibusdam! Reiciendis assumenda magni voluptates culpa facere, reprehenderit, cupiditate non, eligendi tempore earum ipsum debitis fugiat officiis sit nostrum? Id alias cupiditate totam debitis voluptatibus maxime?
          Nobis blanditiis voluptate laboriosam similique libero earum voluptatum sint adipisci odio sequi fugiat ullam necessitatibus veniam odit laborum nam labore iste, iure recusandae enim impedit magni! Magni facilis doloremque corrupti!
          Ab corrupti, modi porro expedita nihil, dolorum sit debitis consequatur iure velit fuga, earum adipisci enim fugit sunt sint a ipsam numquam similique voluptatem cum dolores! Iure similique accusantium aut.
          Quae nihil aperiam tenetur possimus unde voluptatum et dolorum maiores consequatur iure repudiandae beatae aliquam veritatis impedit ut ab quia cupiditate, fugit incidunt iusto laborum. Nesciunt officiis sit laborum minus?
          Cumque soluta, dolores esse hic eveniet excepturi adipisci corporis eum quas dolorem enim dolore nostrum. Iusto harum ipsa non nesciunt. Magni alias itaque eum dolores numquam ratione, ut ipsum vel.
          Architecto repellat ratione necessitatibus nam, magnam laboriosam blanditiis eligendi atque minima sapiente voluptas quas perspiciatis qui commodi, dignissimos maiores, porro cumque aliquid odit animi voluptatum illum. Similique itaque alias amet.
          Dignissimos provident ea aspernatur, commodi praesentium nobis, laudantium nostrum ullam nemo voluptatibus eos. Doloremque optio tenetur possimus pariatur alias fugit quis sint incidunt, debitis praesentium officiis placeat rem ipsa saepe.
          Mollitia aperiam quas consequuntur pariatur doloribus! Non reprehenderit cupiditate aliquam, recusandae, modi consequuntur ipsum id incidunt, quia voluptatum at nemo beatae voluptatibus optio adipisci nobis libero excepturi mollitia. Iusto, dolore?
          Eligendi nobis blanditiis libero amet. Dolorum accusantium obcaecati alias sed animi, eaque quasi commodi illo repellendus quis minima nihil consectetur ea laborum enim dolores fugiat harum sapiente explicabo, ducimus praesentium.
          Fuga necessitatibus nulla, officia commodi laborum, neque nostrum deserunt voluptatum sed laudantium veritatis deleniti dolore ad, doloremque quia quidem enim praesentium iure doloribus ex temporibus aut consequatur! Libero, nobis quasi.
          Esse, deleniti cumque aliquam deserunt dolorum quo sapiente. Mollitia illo vero culpa! Distinctio, cumque! Quos a expedita cum blanditiis quaerat minima. Fugit, qui. Quas cupiditate maiores vero voluptatibus odit nihil.
          Deserunt nemo necessitatibus nobis consequuntur excepturi? Vel, voluptatibus totam corrupti dicta est rem magni nihil! Dolorem, nemo placeat enim nisi, nihil quia reprehenderit ad perspiciatis nostrum adipisci a voluptate. Labore?
        </p>
      </main>
    </CountrySelectedProvider>
  )
}