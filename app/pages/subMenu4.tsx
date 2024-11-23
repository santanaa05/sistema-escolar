import { View, Text, SafeAreaView, Pressable } from "react-native";
import { Link } from "expo-router";
import style from "../../assets/style/geral"

export default function subMenu4() {
    return (
        <SafeAreaView style={style.container1}>
            <Text style={style.heading}>Contato</Text>
            <h3></h3>
            <Text style = {style.text}> Agradecemos o seu interesse em entrar em contato conosco! Sua opinião é muito importante para nós. Se você tiver dúvidas, sugestões ou precisar de informações adicionais, não hesite em nos enviar uma mensagem. Estamos aqui para ajudar! Entre em contato através dos nossos canais abaixo e responderemos o mais rápido possível.</Text> 
            <h3></h3>
            <h3></h3>
            <View style= {style.form4}>
            <Text><b>Email:</b> Etec@sp.gov.br</Text>                                                  
            <Text><b>Telefone:</b> 4002-8922</Text>
            <Text><b>Instagram:</b> @escolaEtec</Text>
            <Text><b>Endereço:</b> Rua de Jesus, 245 - Centro, SP</Text>
            <Text><b>Horário de Funcionamento:</b> Seg a Sex, 8h - 17h</Text>
            </View>

        <Pressable style={style.botaoBack}>
            <Link style={style.textLink} href="/">
                <Text>Voltar</Text>
            </Link>
        </Pressable>

    </SafeAreaView>
    );
}