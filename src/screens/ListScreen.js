import React, { useEffect,useState } from 'react';
import { View, Text, FlatList, TouchableOpacity,} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getDataUser } from '../actions/Action';
import PaginationComponent from '../components/PaginationComponent';
import styles from '../styles/ListScreen'


const ListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalpages,setTotalPages]=useState(1);

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
       <FlatList
      showsVerticalScrollIndicator={false}
       contentContainerStyle={styles.container}
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleUserPress(item.id)}>
            <View  style={[styles.card, styles.shadowProp,styles.userContainer]}>
        
            <Text style={styles.username}>{`${item.first_name} ${item.last_name}`}</Text>

          </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.footer}>
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

export default ListScreen;
