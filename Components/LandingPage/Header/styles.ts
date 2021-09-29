import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        // backgroundColor: 'pink',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        zIndex: 999999,
    },
    active: {
        color: 'white',
        backgroundColor: 'blue',
    },

    logo : {
        width: 300,
        color: 'white',
        marginRight: 20,
    },
    navMenu : {
        /* padding: 20px; */
    },
    navIcon : {
        fontSize: 22,
        borderRadius: 15,
        /* margin: 10px; */
        /* padding: 20px; */
        // border: 1px solid pink,
    },    
    menuIcon : {
        fontSize: 22,
        borderRadius: 15,
        /* margin: 10px; */
        /* padding: 20px; */
        // border: 1px solid pink,
    },    
    searchContainer:{
        width: '100%',
        borderRadius: 30,
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'rgb(202, 202, 202)',
        borderWidth: 1,
        },
        search:{
            backgroundColor: 'black',
            borderRadius: 30,
            padding: 10,
        },
        // navIcon:{
        //     backgroundColor: 'rgb(241, 171, 183)',
        //     borderRadius: 15,
        //     border: '1px solid rgb(255, 255, 255)',
        // },
        input:{
            width: '100%',
            // height: '100%',
            margin: 5,
            border: 'none',
            fontSize: 16,
            color: 'rgb(202, 202, 202)',
            outline: 'none',
        },
        // middleContainer : {
            // padding: '0 10px',
        // },
        
        // },
        // searchContainer:hover{
        //  border: 1px solid rgb(228, 142, 156);
        // }
        responseButton:{
        // border: 1px solid black;
        padding: 10,
        margin: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        },
        // responseButton:{
        //     backgroundColor: 'rgb(241, 171, 183)',
        //     border: '1px solid white',
        // },
        p:{
            /* padding: 0 10px;
            width: 60px; */
        },
        // announcement:{
        //     width: '100%',
        //     padding: 10,
        //     color: 'white',
        //     fontWeight: 'bold',
        //     align-items: 'center',
        //     text-align: 'center',
        //     backgroundColor: 'rgb(229, 145, 145)',
        // }


        // shopping{
        //     display: flex;
        // }
        badge:{
            position: 'absolute',
            right: 0,
            top: 0,
            backgroundColor: 'rgb(229, 145, 145)',
            borderRadius: 50,
            padding: 10,
        },

        middleContainer: {

        },
        shopping: {

        },
        

    
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