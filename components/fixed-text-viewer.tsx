import Diff from "@/components/diff";
import { textTest } from "@/lib/test";

export default function FixedTextViewer() {
  const text = textTest;
  return (
    <div>
      <Diff
        string1="En la tranquilidad del atardecer, el bosque parecía cobrar vida. Los árboles, altos y majestuosos, susurraban entre sí con el suave movimiento del viento. A lo lejos, el canto de los pájaros anunciaba la llegada de la noche, mientras el sol pintaba el cielo con tonos de naranja y púrpura. Caminando por un sendero estrecho, se podía sentir la conexión con la naturaleza en cada paso. Las hojas crujían bajo los pies, y el aire fresco traía consigo el aroma a tierra húmeda y a flores silvestres. Este lugar, escondido y apartado del bullicio de la ciudad, ofrecía un refugio de paz y serenidad. A medida que el sol descendía, las sombras se alargaban, creando un paisaje casi mágico. Los primeros destellos de las estrellas comenzaron a aparecer, y el cielo se transformó en un manto estrellado que invitaba a soñar. Aquí, en el corazón del bosque, uno podía redescubrir la belleza simple y pura del mundo natural. En este rincón del universo, el tiempo parecía detenerse. Era un recordatorio de la importancia de desconectar, de escuchar el silencio y de encontrar la paz en los pequeños detalles. En medio del bosque, rodeado de la grandiosidad de la naturaleza, uno podía sentirse verdaderamente libre y en armonía con el mundo."
        string2="En la pachorra del atardecer, el bosque parecía empezar la fiesta. Los árboles, altos y majestuosos, cuchicheaban entre sí con el cachondo movimiento del viento. A lo lejos, el canto de los pájaros anunciaba la llegada de la noche, mientras el sol pintarrajeaba el cielo con tonos de naranja y púrpura. Caminando por un sendero angosto, se podía sentir el buen rollo con la naturaleza en cada paso. Las hojas crujían bajo los pies, y el aire fresquito traía consigo el aroma a tierra mojada y flores salvajes. Este lugar, oculto y apartado del jaleo de la ciudad, ofrecía un refugio de paz y buen rollo. A medida que el sol bajaba, las sombras se alargaban, creando un paisaje casi de cuento de hadas. Los primeros chispazos de las estrellas comenzaron a asomar, y el cielo se transformó en un manto estrellado que invitaba a soñar. Aquí, en el corazón del bosque, uno podía redescubrir la belleza simple y auténtica del mundo natural. En este rincón del mundo, el tiempo parecía echarse una siesta. Era un recordatorio de la importancia de desconectar, de escuchar el silencio y de encontrar la paz en los pequeños detalles. En medio del bosque, rodeado de la grandiosidad de la naturaleza, uno podía sentirse realmente libre y en armonía con el mundo."
        mode="words"
      />
    </div>
  );
}
