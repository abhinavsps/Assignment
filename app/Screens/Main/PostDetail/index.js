import React, { useEffect,useState,useLayoutEffect } from 'react';
import { FlatList,Text,View,TouchableOpacity,StyleSheet,Alert } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation , useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProgressBar from "../../../Utils/ProgressBar";
import PostHeader from "../../../Utils/PostHeader"
import {getPostDetails,DeletePost} from '../../../Redux/Actions/Post_action'

const PostDetail = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(()=>{
     props.getPostDetails(route.params.Id)
  },[])

  // Delete Post
  const deletePost=()=>{
    Alert.alert(
      'Delete Post',
      'Are you sure for delete this post?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => props.DeletePost(route.params.Id)}
      ],
      { cancelable: false }
    );
  }
 // Render Comment Card
  const renderItem = ({ item,index }) => (
    <View style={styles.itemContainer}>
      <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
      <Text  style={styles.description}>{item.body}</Text>
    </View>
  );
  
    return  (
      <View style={styles.container}>
          <PostHeader Title={route.params.Title} Navigation={navigation} backEnable deleteEnable onDeletePress={deletePost} />
          <View style={styles.innerContainer}>
            <View style={styles.postContainer}>
              <Text style={styles.postDescription}>{route.params.Body}</Text>
            </View>
            <Text style={styles.commentTxt}>Comments</Text>
            <FlatList
                  data={props.Comments}
                  showsVerticalScrollIndicator={false}
                  style={styles.flatListStyle}
                  contentContainerStyle={styles.flatListStyle}
                  renderItem={renderItem}
                  keyExtractor={item => item.id.toString()}
              />
          </View>

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
  innerContainer:{
    flex:1,
    width:"100%",
    
  },
  flatListStyle:{
    width:"95%",
    alignSelf:"center"
  },
  flatListContainerStyle:{
    paddingBottom:hp("5%")
  },
  commentTxt:{
    fontSize:hp("2.5%"),
    padding:hp("1%")
  },
  postContainer:{
    width:"100%",
    backgroundColor:"#FFF",
    marginVertical:hp("1%"),
    alignSelf:"center",
    paddingHorizontal:wp("5%")
  },
  itemContainer:{
    marginVertical:hp("2%"),
    backgroundColor:"#FFF",
    padding:hp("1%")
  },
  name:{
    fontSize:hp("2.5%"),
    fontWeight:"bold"
  },
  description:{
    fontSize:hp("2%"),
    paddingVertical:hp("2%")
  },
  postDescription:{
    fontSize:hp("2.5%"),
    paddingVertical:hp("2%"),
  }



});


function mapStateToProps(state) {
    const { hideProgress,Posts,Comments } = state.PostReducer;
    return { hideProgress,Posts,Comments}
}

export default connect(mapStateToProps, {getPostDetails,DeletePost})(PostDetail)