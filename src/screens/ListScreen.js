import React, { useEffect,useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getDataUser } from '../actions/Action';
import PaginationComponent from '../components/PaginationComponent';


const ListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [currentPage, setCurrentPage] = useState(1);
const [totalpages,setTotalPages]=useState(1);
//console.log(users)
  useEffect(() => {
    fetchUsers();
  },[currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${currentPage}&per_page=5`);
     
      setTotalPages(response.data.total_pages)
   
      dispatch(getDataUser(response.data.data))
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserPress = (id) => {
    navigation.navigate('Details', { id });
  };

  return (
    <View style={{flex:1}}>
       dr4e <FlatList
      showsVerticalScrollIndicator={false}
       contentContainerStyle={styles.container}
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleUserPress(item.id)}>
            <View  style={[styles.card, styles.shadowProp,styles.userContainer]}>
        
            <Text style={styles.username}>{`${item.first_name} ${item.last_name}`}</Text>

            {/* {if you want to show profile picture then you can uncomment above Image component} */}

            {/* <Image source={{ uri: item.avatar }} style={styles.avatar} /> */}
         
          </View>
          </TouchableOpacity>
        )}
      />
      <View style={{backgroundColor:'#ddd',paddingVertical:15,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:35,elevation:10}}>
      {
        currentPage>1? <PaginationComponent onPress={()=>setCurrentPage(currentPage-1)} title="Previous" /> :<View/>
         }
      {
    currentPage<totalpages?<PaginationComponent onPress={()=>setCurrentPage(currentPage+1)} title="Next"/> :<View/>
}
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingTop: 16,
    },
    userContainer: {
      flexDirection: 'row',
    //  alignItems: 'center',
      marginBottom: 16,
      justifyContent:'space-between'
    },
    // avatar: {
    //   width: 40,
    //   height: 40,
    //   borderRadius: 20,
    //   marginRight: 12,
    // },
    username: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    card: {
         backgroundColor: 'white',
        // borderRadius: 8,
         paddingVertical: 35,
         paddingHorizontal: 25,
        // width: '100%',
        // marginVertical: 10,
        elevation:5
      },
      shadowProp: {
       
        
      },
  });
  

export default ListScreen;
