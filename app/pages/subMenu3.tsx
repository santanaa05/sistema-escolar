import { View, Text, SafeAreaView, Pressable } from "react-native";
import { Link } from "expo-router";
import style from "../../assets/style/geral"

export default function subMenu3() {
    return (
    <SafeAreaView style= {style.container}>
        <Text style = {style.heading}>Eventos</Text>
        <h2></h2>
        <Text style= {style.text}>Aqui você encontra os eventos importantes que acontecerão na escola nos próximos dias. 
        Fique atento às datas e informações!</Text>
        <h3></h3> 
        <View style = {style.form}>
        <Text><b>10/12/24: </b> Reunião de Pais </Text>
        <Text><b>20/12/24: </b> Festa de final de ano para alunos e professores</Text>
        <Text><b>15/02/25: </b> Exposição dos melhores projetos desenvolvidos pelos alunos durante o ano.</Text>
        <Text><b>05/02/25: </b> Palestra com profissionais de diversas áreas para orientação profissional dos alunos.</Text>
        <Text><b>10/02/25: </b> Dia dedicado à cultura, com apresentações e atividades artísticas.</Text>
        </View>
    
    <Pressable style={style.botaoBack}>
    <Link href="/">
    <Text style={style.textLink}>Voltar</Text>
    </Link>
    </Pressable>
    </SafeAreaView>
    );}