import React, { useEffect,useState,useLayoutEffect } from 'react';
import { FlatList,Text,View,TouchableOpacity,StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProgressBar from "../../../Utils/ProgressBar";
import PostHeader from "../../../Utils/PostHeader"
import {getPosts} from '../../../Redux/Actions/Post_action'

const Posts = (props) => {
  const navigation = useNavigation();
  

  useEffect(()=>{
    props.getPosts()
  },[])

  const renderItem = ({ item,index }) => (
        <TouchableOpacity 
            style={styles.itemContainer}
            onPress={()=>{}}
        >
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
        <Text numberOfLines={1} style={styles.description}>{item.body}</Text>
      </TouchableOpacity>
  );

    return  (
      <View style={styles.container}>
          <PostHeader Title={"Post"} Navigation={navigation} />
            <FlatList
                  data={props.Posts}
                  showsVerticalScrollIndicator={false}
                  style={styles.flatListStyle}
                  contentContainerStyle={styles.flatListStyle}
                  renderItem={renderItem}
                  keyExtractor={item => item.id.toString()}
              />
              <ProgressBar hide={props.hideProgress} />
      </View>
                       
    )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  flatListStyle:{
    width:"100%"
  },
  flatListContainerStyle:{
    paddingBottom:hp("5%")
  },
  itemContainer:{
    width:"90%",
    backgroundColor:"#FFF",
    marginVertical:hp("1%"),
    paddingHorizontal:wp("2%"),
    alignSelf:"center",
    borderRadius:10
    
  },
  title:{
    fontSize:hp("3%"),
    fontWeight:"bold",
    textAlign:"center",
    marginVertical:hp("2%")
  },
  description:{
    fontSize:hp("2.5%"),
    textAlign:"center",
    marginVertical:hp("2%")
  }



});


function mapStateToProps(state) {
    const { hideProgress,Posts } = state.PostReducer;
    return { hideProgress,Posts}
}

export default connect(mapStateToProps, {getPosts})(Posts)