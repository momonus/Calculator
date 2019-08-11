import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
          number :'', 
          sum :0 , 
          mark :"" ,
          out :'',
          };
  }
  btnNum(num)
  {
    var temp = this.state.number;
    if(temp == "")
    {
      temp = num;
    }
    else
    { 
      temp += num;
    }
    this.setState({out:temp,number:temp});
  }
  btnAC(){
    this.setState({number:"",sum:0,mark:"",out:""});
  }
  btnEqual(){
    var temp = this.state.sum;
    if(this.state.mark=="+")
    {
      temp = Number(this.state.sum)+Number(this.state.number);
      this.setState({sum:temp,number:temp,out:temp,mark:""});
    }
    else 
    {
      if(this.state.mark=="-")
      {
        temp = Number(this.state.sum)-Number(this.state.number);
        this.setState({sum:temp,number:temp,out:temp,mark:""});
      }
      else
      {
        if(this.state.mark=="*")
        {
          temp = Number(this.state.sum)*Number(this.state.number);
          this.setState({sum:temp,number:temp,out:temp,mark:""});
        }
        else 
        {
          if(this.state.mark=="/")
          {
            temp = Number(this.state.sum)/Number(this.state.number);
            this.setState({sum:temp,msum:temp,number:temp,out:temp,mark:""});
          }
        }
      }
    }
  }
  btnPlus()
  {
    var temp = this.state.sum;
    var m ="+";
    if(this.state.mark == "")
    {
      this.setState({sum:Number(this.state.number),number:"",out:"",mark:m});
    }
    else
    {
      temp = Number(this.state.sum)+Number(this.state.number);
      this.setState({sum:temp,number:"",out:"",mark:m});
    }
  }
  btnMinus()
  {
    var temp = this.state.sum;
    var m ="-";
    if(this.state.mark == "")
    {
      this.setState({sum:Number(this.state.number),number:"",out:"",mark:m});
    }
    else
    {
      temp = Number(this.state.sum)-Number(this.state.number);
      this.setState({sum:temp,number:"",out:"",mark:m});
    }
    
  }
  btnMulitply()
  {
    var temp = this.state.sum;
    var old = this.state.number;
    var m ="*";
    if(this.state.mark == "")
    {
      this.setState({sum:Number(this.state.number),number:"",out:"",mark:m});
    }
    else
    {
      temp = Number(this.state.sum)*Number(this.state.number);
      this.setState({sum:temp,number:"",out:"",mark:m});
    }
  }
  btnDivide()
  {
    var temp = this.state.sum;
    var m ="/";
    if(this.state.mark == "")
    {
      this.setState({sum:Number(this.state.number),number:"",out:"",mark:m});
    }
    else
    {
      temp = Number(this.state.sum)/Number(this.state.number);
      this.setState({sum:temp,number:"",out:"",mark:m});
    }
  }
render() {
return (

<LinearGradient
colors={['#000000', '#000000', '#000000']}
style={{flex: 1}}
>
<View style={{flex: 1}}>
<View style={{flex: 1}} />

<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
<View style={{flex: 1}} >
<Text style={styles.title}>{this.state.out}</Text>
</View>
</View>

<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn4}onPress = {()=>this.btnAC()}><Text style= {styles.titleText}>AC</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn4}><Text style= {styles.titleText}>+/-</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn4}><Text style= {styles.titleText}>%</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn2}onPress = {()=>this.btnDivide()}><Text style= {styles.titleText1}>÷</Text></TouchableOpacity>
</View>
</View>

<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn}onPress = {()=>this.btnNum("7")}><Text style= {styles.titleText1}>7</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn}onPress = {()=>this.btnNum("8")}><Text style= {styles.titleText1}>8</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn}onPress = {()=>this.btnNum("9")}><Text style= {styles.titleText1}>9</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn2}onPress = {()=>this.btnMulitply()}><Text style= {styles.titleText1}>x</Text></TouchableOpacity>
</View>
</View>

<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn}onPress = {()=>this.btnNum("4")}><Text style= {styles.titleText1}>4</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn}onPress = {()=>this.btnNum("5")}><Text style= {styles.titleText1}>5</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn}onPress = {()=>this.btnNum("6")}><Text style= {styles.titleText1}>6</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn2}onPress = {()=>this.btnMinus()}><Text style= {styles.titleText1}>-</Text></TouchableOpacity>
</View>
</View>

<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn}onPress = {()=>this.btnNum("1")}><Text style= {styles.titleText1}>1</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn}onPress = {()=>this.btnNum("2")}><Text style= {styles.titleText1}>2</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn}onPress = {()=>this.btnNum("3")}><Text style= {styles.titleText1}>3</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn2}onPress = {()=>this.btnPlus()}><Text style= {styles.titleText1}>+</Text></TouchableOpacity>
</View>
</View>

<View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
<View style={{flex: 2,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn3}onPress = {()=>this.btnNum("0")}><Text style= {styles.titleText1}>0</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn}><Text style= {styles.titleText1}>,</Text></TouchableOpacity>
</View>
<View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}} >
<TouchableOpacity style={styles.btn2}onPress = {()=>this.btnEqual()}><Text style= {styles.titleText1}>=</Text></TouchableOpacity>
</View>
</View>

</View>
</LinearGradient>
);
}
}
const styles = StyleSheet.create({
title: {
fontSize: 70,
fontWeight: 'bold',
textAlign: 'right',
color : "white"
},
titleText: {
fontSize: 30,
fontWeight: 'bold',
textAlign: 'right',
color : "black"
},

titleText1: {
fontSize: 30,
fontWeight: 'bold',
textAlign: 'right',
color : "white"
},

btn4:{
alignItems: 'center',
padding: 15,
height: 70,
width: 80, //The Width must be the same as the height
borderRadius:200, //Then Make the Border Radius twice the size of width or Height 
backgroundColor:'#B5B5B5',
justifyContent: 'center', 
},

btn3:{
alignItems: 'center',
padding: 15,
height: 80,
width: 170,
borderRadius:300,
backgroundColor:'#555555',
justifyContent: 'center', 
},

btn2:{
alignItems: 'center',
padding: 15,
height: 70,
width: 70,
borderRadius:300,
backgroundColor:'#FF7F00',
justifyContent: 'center', 
},

btn:{
alignItems: 'center',
padding: 15,
height: 70,
width: 70, 
borderRadius:300, 
backgroundColor:'#555555',
justifyContent: 'center', 
}

});