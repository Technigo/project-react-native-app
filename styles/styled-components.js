import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 80%;
    margin: 0 auto;
`;

export const Input = styled.TextInput`
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #00E;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 20px;
    padding: 5px;
`
export const ButtonText = styled.Text`
    font-size: 18px;
    color: ${props => (props.accentColor ? 'white' : 'hsl(220, 80%, 50%)')};
    text-align: center;
    font-size: ${props => (props.accentColor ? '20px' : '18px')};
`
export const Button = styled.TouchableOpacity`
    width: 50%;
    margin: 15px auto 0 auto;
    background-color: ${props => (props.accentColor ? 'orange' : 'transparent')};
    padding: ${props => (props.accentColor ? '5px' : '0')};
    border-radius: ${props => (props.accentColor ? '10px' : '0')};
`

export const LikedInsults = styled.ScrollView`
    flex: 1;
    height: 100px;
    width: 100%;
`

export const LikedInsult = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
    width: 100%;
    padding-right: 15px;
`

export const SafeArea = styled.SafeAreaView`
    padding: 50px 0;
`

export const Header1 = styled.Text`
    font-size: 30px;
    color: hsl(0, 0%, 20%);
`

export const InsultListItem = styled.Text`
    flex: 1;
    flex-wrap: wrap;
`


// export const base = {
//     flex: 1,
//     paddingLeft: 30,
//     paddingRight: 30, 
// }



// export const image = {
//     flex: 1,
//     justifyContent: "center",
// }

// export const whiteBackground = {
//     flex: 1,
//     backgroundColor: 'hsla(0, 0%, 100%, .8)',
//     padding: 10,
// }

// export const container = {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center'
// }

// export const routeIcons = {
// 	"Stock": "flower",
// 	"Pack": "box",
//     "Deliveries": "shopping-basket",
//     "Log in": "lock",
//     "Invoices": "newsletter",
// };

// export const button = {
//     elevation: 8,
//     backgroundColor: 'hsl(120, 20%, 80%)',
//     borderRadius: 3,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     marginVertical: 10,
//     marginHorizontal: 5,
//     width: '100%',
// };


// export const deliveryItem = {
//     elevation: 8,
//     marginHorizontal: 'auto',
//     flexShrink: 1,
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     borderRadius: 8,
//     marginVertical: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     flex: 1,
//     width: 300,
//     maxWidth: '40%',
// };
