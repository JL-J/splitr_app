import React from 'react';
import { Header, Title, connectStyle} from 'native-base';


export default class HeaderBanner extends React.Component {

  render()  {
    return (
      <Header style={styles.headercontainer}>
        <Title style={styles.header}>
          {this.props.title}
        </Title>
      </Header>
    )
  }
}

  const styles = {
    headercontainer: {
      paddingTop: 12,
      backgroundColor: '#C9E265',
    },
    header: {
      color: 'black',
      textAlign: 'center',
      fontFamily: 'Arial',
      letterSpacing: 5,
      fontWeight: 'bold'
    }
  }
