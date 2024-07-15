"use client";
import Diff from "@/components/diff";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useState } from "react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export default function FixedTextViewer({ classname }: { classname?: string }) {
  const [showErrors, setShowErrors] = useState(true);
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={() => {
          copyToClipboard("testing");
        }}
        className={cn(
          "border rounded-md shadow-md px-6 py-4 overflow-auto max-h-96 group relative text-start",
          classname
        )}
      >
        {isCopied ? (
          <CheckIcon className=" bg-background absolute top-0 w-4 h-4 right-0 m-4 group-hover:opacity-100" />
        ) : (
          <ClipboardIcon className="bg-background absolute top-0 w-4 h-4 right-0 m-4 group-hover:opacity-100" />
        )}
        <Diff
          string1="En la tranquilidad del atardecer, el bosque parecía cobrar vida. Los árboles, altos y majestuosos, susurraban entre sí con el suave movimiento del viento. A lo lejos, el canto de los pájaros anunciaba la llegada de la noche, mientras el sol pintaba el cielo con tonos de naranja y púrpura. Caminando por un sendero estrecho, se podía sentir la conexión con la naturaleza en cada paso. Las hojas crujían bajo los pies, y el aire fresco traía consigo el aroma a tierra húmeda y a flores silvestres. Este lugar, escondido y apartado del bullicio de la ciudad, ofrecía un refugio de paz y serenidad. A medida que el sol descendía, las sombras se alargaban, creando un paisaje casi mágico. Los primeros destellos de las estrellas comenzaron a aparecer, y el cielo se transformó en un manto estrellado que invitaba a soñar. Aquí, en el corazón del bosque, uno podía redescubrir la belleza simple y pura del mundo natural. En este rincón del universo, el tiempo parecía detenerse. Era un recordatorio de la importancia de desconectar, de escuchar el silencio y de encontrar la paz en los pequeños detalles. En medio del bosque, rodeado de la grandiosidad de la naturaleza, uno podía sentirse verdaderamente libre y en armonía con el mundo."
          string2="En la quietud del atardecer, el bosque parecía cobrar vida. Los árboles, altos y majestuosos, susurraban entre sí con el delicado movimiento del viento. A lo lejos, el canto de los pájaros anunciaba la llegada de la noche, mientras el sol coloreaba el cielo con tonos de naranja y púrpura. Caminando por un sendero estrecho, se podía sentir la conexión con la naturaleza en cada paso. Las hojas crujían bajo los pies, y el aire fresco traía consigo el aroma a tierra húmeda y flores silvestres. Este lugar, oculto y apartado del bullicio de la ciudad, ofrecía un refugio de paz y serenidad. A medida que el sol descendía, las sombras se alargaban, creando un paisaje casi etéreo. Los primeros destellos de las estrellas comenzaron a aparecer, y el cielo se transformó en un manto estrellado que invitaba a soñar. Aquí, en el corazón del bosque, uno podía redescubrir la belleza simple y pura del mundo natural. En este rincón del mundo, el tiempo parecía detenerse. Era un recordatorio de la importancia de desconectar, de escuchar el silencio y de encontrar la paz en los pequeños detalles. En medio del bosque, rodeado de la magnificencia de la naturaleza, uno podía sentirse verdaderamente libre y en armonía con el mundo."
          showErrors={showErrors}
        />
      </button>
      <div className="flex items-center space-x-2">
        <Switch
          checked={showErrors}
          id="airplane-mode"
          onClick={() => setShowErrors(!showErrors)}
        />
        <Label htmlFor="airplane-mode">Show errors</Label>
      </div>
    </div>
  );
}
