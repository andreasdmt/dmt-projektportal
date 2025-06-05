import { Card, CardContent } from "./components/ui/card"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs"
import { useState } from "react"

export default function DMTApp() {
  const [project, setProject] = useState("Ventilation Täby")
  const [hours, setHours] = useState("")
  const [material, setMaterial] = useState("")
  const [note, setNote] = useState("")

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">DMT Projektportal</h1>

      <Tabs defaultValue="projekt" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="projekt">Projekt</TabsTrigger>
          <TabsTrigger value="tid">Tidrapport</TabsTrigger>
          <TabsTrigger value="material">Material</TabsTrigger>
          <TabsTrigger value="dagbok">Dagbok</TabsTrigger>
        </TabsList>

        <TabsContent value="projekt">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-2">Aktivt projekt</h2>
              <p>Projektnamn: <strong>{project}</strong></p>
              <p>Adress: Vallmovägen 12, Täby</p>
              <p>Startdatum: 2025-06-01</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tid">
          <Card>
            <CardContent className="grid gap-4 p-4">
              <h2 className="font-semibold">Tidrapportering</h2>
              <Input placeholder="Antal timmar" value={hours} onChange={e => setHours(e.target.value)} />
              <Textarea placeholder="Kommentar / arbetsmoment" />
              <Button>Spara tidrapport</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="material">
          <Card>
            <CardContent className="grid gap-4 p-4">
              <h2 className="font-semibold">Materialrapport</h2>
              <Input placeholder="Material + mängd" value={material} onChange={e => setMaterial(e.target.value)} />
              <Button>Ladda upp kvitto (valfritt)</Button>
              <Button>Spara materialrapport</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dagbok">
          <Card>
            <CardContent className="grid gap-4 p-4">
              <h2 className="font-semibold">Dagboksanteckning</h2>
              <Textarea placeholder="Skriv en notering..." value={note} onChange={e => setNote(e.target.value)} />
              <Button>Spara anteckning</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
