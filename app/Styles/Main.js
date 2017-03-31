import {
    StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    item: {
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'rgba(100,53,201,0.7)',
        paddingBottom:6,
        paddingTop:6,
        flex:1
    },
    itemContent:{
        flex:1,
        marginLeft:13,
        marginTop:6
    },
    itemHeader:{
        fontSize:18,
        fontFamily:'Helvetica Neue',
        fontWeight:'200',
        color:'#6435c9',
        marginBottom:6
    },
    itemMeta:{
        fontSize:16,
        color:'rgba(0,0,0,0.6)',
        marginBottom:6
    },
    redText:{
        color:'#db2828',
        fontSize:15
    },
    itemText: {
        fontSize: 16,
        fontFamily: 'Helvetica Neue',
        fontWeight: '300',
        color: 'rgba(0,0,0,0.8)',
        lineHeight:26
    },
    image: {
        height: 138,
        width: 99,
        margin: 6
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    overlay:{
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.3)'
    },
    overlayHeader:{
        fontSize:33,
        fontFamily:'Helvetica Neue',
        fontWeight:'200',
        color:'#eae7ff',
        padding:10
    },
    overlaySubHeader:{
        fontSize:16,
        fontFamily:'Helvetica Neue',
    }

});
