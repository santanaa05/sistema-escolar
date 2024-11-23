import { View, Text, SafeAreaView, Pressable } from "react-native";
import { Link } from "expo-router";
import style from "../../assets/style/geral";

export default function subMenu2() {
    return (
        <SafeAreaView style= {style.container2}>
            <Text style = {style.heading}>Calendario</Text>
            <h3></h3>
            <Text style ={style.text}>Bem-vindo ao Calendário Escolar! 
            <Text style ={style.text}>               Aqui você encontrará todas as datas
            importantes e eventos programados para o ano letivo. </Text>Fique atento às informações sobre reuniões, feriados e atividades.</Text>
            <b>Confira as datas abaixo e marque no seu calendário!</b>
            <h3></h3>
            <View style = {style.form2}>
            <Text>01/01: Início das Aulas </Text>
            <Text>15/04: Feriado de Páscoa</Text>
            <Text>20/06: Festa Junina</Text>
            <Text>10/11: Reunião de Pais</Text>
            <Text>15/12: Fim do Ano Letivo</Text>
            </View>

        <Pressable style={style.botaoBack}>
        <Link href="/">
        <Text style={style.textLink}>Voltar</Text>
        </Link>
        </Pressable>
        </SafeAreaView>
    );
}