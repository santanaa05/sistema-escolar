import { Text, SafeAreaView,  ImageBackground } from "react-native";
import style from "../assets/style/geral"

export default function Index() {
  return (
    <SafeAreaView style ={style.fund} >
      <Text style = {style.heading}>Bem-vindo a Escola Etec!</Text>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <Text style = {style.text}>A Escola Etec é uma instituição dedicada à educação de qualidade. Nossa missão é promover o desenvolvimento integral dos alunos, preparando-os para os desafios do futuro. Junte-se a nós nessa jornada!</Text>
    </SafeAreaView>
  );
}