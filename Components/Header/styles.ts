import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        justifyContent: 'space-between',
        // alignItems: 'center',
        // padding: 20,
        zIndex: 999999,
    },
    active: {
        color: 'white',
        backgroundColor: 'blue',
    },

    logo : {
        width: 300,
        color: 'black',
        marginRight: 20,
    },
    navMenu : {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 8,
    },
    navIcon : {
        fontSize: 20,
        borderRadius: 15,
        margin: 5,
        padding: 3,
        borderColor: 'blue',
        borderWidth: 1,
    },    
    // menuIcon : {
    //     fontSize: 22,
    //     borderRadius: 15,
        /* margin: 10px; */
        /* padding: 20px; */
        // border: 1px solid pink,
    // },  
    subHeader: {
        flexDirection: 'row',
        padding: 10,
        },
    searchContainer:{
        flex: 1,
        borderRadius: 30,
        backgroundColor: 'white',
        },
        search:{
            padding: 5,
        },

    
        shopping :{
            width: 100,
            padding: 5,
            alignItems: 'center'
        },
        shop: {

        },
        badge:{
            position: 'absolute',
            right: 0,
            top: 0,
            color: 'black',
            zIndex: 999999,
            fontSize: 18,
        },
        // input:{
        //     width: '100%',
        //     height: '100%',
        //     margin: 5,
        //     fontSize: 16,
            // color: 'rgb(202, 202, 202)',
        // },
        // middleContainer : {
            // padding: '0 10px',
        // },
        
        // },
        // searchContainer:hover{
        //  border: 1px solid rgb(228, 142, 156);
        // }
        // responseButton:{
        // border: 1px solid black;
        // padding: 10,
        // margin: 5,
        // borderRadius: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
        // },
        // responseButton:{
        //     backgroundColor: 'rgb(241, 171, 183)',
        //     border: '1px solid white',
        // },

        // announcement:{
        //     width: '100%',
        //     padding: 10,
        //     color: 'white',
        //     fontWeight: 'bold',
        //     align-items: 'center',
        //     text-align: 'center',
        //     backgroundColor: 'rgb(229, 145, 145)',
        // }



        // middleContainer: {

        // },
        // shopping: {

        // },
        

    
})
export default styles;



    
// @media screen and (max-width: 758px){
//     .navMenu {
//         display: none;
//     }

// }

// @media screen and (max-width: 1050px){
//     .navMenu {
//         display: none;
//     }
//     .searchContainer{
//         display: none;
//     }
// }


// @media screen and (min-width: 750px){
    
//     .navOption{
//         display: none;
//     }
// }