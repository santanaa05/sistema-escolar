import { View, Text, SafeAreaView, Pressable } from "react-native";
import { Link } from "expo-router";
import style from "../../assets/style/geral"

export default function subMenu1() {
    return (
        <SafeAreaView style={style.container3}>
            <Text style= {style.heading}>Boletim Escolar</Text>
            <h2></h2>
            <Text style = {style.text}>Este é o boletim escolar com o desempenho de todas as disciplinas ao longo do período letivo.</Text>
            <View style = {style.form3}>
                <Text><b>Matemática: </b> O aluno foi Aprovado com uma nota final de 8.5!</Text>
                <Text><b>Língua Portuguesa: </b> O aluno foi Reprovado com uma nota final de 5.5!</Text>
                <Text><b>Historia: </b> O aluno foi Aprovado com uma nota final de 9.0!</Text>
                <Text><b>Ciências: </b>O aluno foi Reprovado com uma nota final de 5.0!</Text>
                <Text><b>Inglês: </b>O aluno foi Aprovado com uma nota final de 9.5!</Text>
            </View>
            <Pressable style={style.botaoBack}>
            <Link href="/">
            <Text style={style.textLink}>Voltar</Text>
            </Link>
            </Pressable>
        </SafeAreaView>
    );
}