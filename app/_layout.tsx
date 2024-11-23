import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{ title: 'Inicio' }} />
      <Drawer.Screen
        name="pages/subMenu1"
        options={{ title: 'Boletim' }} />
            <Drawer.Screen
        name="pages/subMenu2"
        options={{ title: 'Calendario' }} />
            <Drawer.Screen
        name="pages/subMenu3"
        options={{title: 'Eventos'}} />
            <Drawer.Screen
        name="pages/subMenu4"
        options={{title: 'Contato'}} />
    </Drawer>
  );
}