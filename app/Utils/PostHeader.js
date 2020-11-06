import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Back,Delete } from '../Utils/images';


const PostHeader = ({ Title,Navigation,backEnable,deleteEnable,onDeletePress }) => {
    return (
        <View style={styles.Container}>
            {backEnable&&
                <TouchableOpacity  onPress={()=> Navigation.goBack() } style={styles.Image_Container}>
                <Image style={styles.Icon} source={Back} />
            </TouchableOpacity>
            }
            <Text numberOfLines={1} style={styles.Title_Container}>{Title} </Text>
            {deleteEnable&&
                <TouchableOpacity  onPress={onDeletePress} style={styles.Delete_Image_Container}>
                <Image style={styles.Icon} source={Delete} />
            </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf:'center',
        alignItems:"center",
        height:hp("7%"),
        backgroundColor:"#FFF",
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.3,
        elevation:2
        
    },
    Image_Container: {
        width: '5%',
        height: '40%',
        marginVertical:hp("2%"),
        marginHorizontal:wp("3%"),

    },
    Delete_Image_Container:{
        width: '5%',
        height: '40%',
        marginVertical:hp("2%"),
    },
    Icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    Title_Container: {
        width: '80%',
        paddingLeft:'5%',
        height: '100%',
        paddingTop:hp("2%"),
        fontSize: hp('2.6%')
    }
})

export default PostHeader;