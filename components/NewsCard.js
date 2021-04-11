import React from 'react';
import { Linking } from 'react-native'
import styled from 'styled-components/native'

import {time_ago} from '../assets/dateFromNow'

const Card = styled.TouchableOpacity`
    padding: 10px;
    width: 100%;
    height: auto;
    flex-direction: row;
    background: rgba(150,60,10,0.07);
    margin-bottom: 10px;
    border-radius: 10;
`

const NewsTitleContainer = styled.View`
  flex-direction: column;
  width: 75%;
`

const NewsText = styled.Text`
    margin-right: 10px;
    margin-bottom: 6px;
`

const Source = styled(NewsText)`
    font-size: 10px;
    font-weight: 400;
`

const Headline = styled(NewsText)`
    font-size: 15px;
    font-weight: 700;
`

const Content = styled(NewsText)`
    font-size: 12px;
`

const Published = styled(NewsText)`
    font-size: 10px;
`

const Img = styled.Image`
    width: 65px;
    height: 65px;
    border-radius: 5px;
`

const NewsCard = ({title, urlToImage, source, publishedAt, description, url}) => {


    const capitalizeFirstLetter = (string) => {
        return checkName(string[0].toUpperCase() + string.slice(1));
    }

    const checkUrl = (string) => {
      return (
        capitalizeFirstLetter(string.replace(/Www./ , "").replace(/\.se/, ""))
      )
    }

    const checkName = (string) => {
      return (
        string.replace(/Vm-fotboll/ , "VM-fotboll").replace(/Svenskgolf/ , "Svensk Golf").replace(/Nsd/ , "NSD").replace(/Hn/ , "Hallands Nyheter").replace(/Nwt/ , "NWT").replace(/Nyteknik/ , "Ny Teknik").replace(/Jmk.su/ , "Läget - JMK").replace(/Folkbladet.nu/ , "Västerbottens Folkblad").replace(/Sla/ , "Skaraborgs Allehanda").replace(/Sydostran/ , "Sydöstran").replace(/Vk/ , "Västerbottens-Kuriren").replace(/Olandsbladet/ , "Ölandsbladet").replace(/Dt/ , "Dalarnas Tidningar").replace(/Vimmerbytidning/ , "Vimmerby Tidning").replace(/Eposten/ , "Enköpings-Posten").replace(/Dagensps/ , "Dagens PS").replace(/Ystadsallehanda/ , "Ystads Allehanda").replace(/Fz/ , "FZ").replace(/Ttela/ , "TTELA").replace(/Borasdly/ , "Borås DLY").replace(/Nsk/ , "Norra Skåne").replace(/Fotbolldirekt/ , "FotbollDirekt").replace(/Ekuriren/ , "Eskilstuna-Kuriren").replace(/Dagensps/ , "Dagens PS").replace(/FotbollDagens Industrirekt/ , "FotbollDirekt").replace(/Dagens Industrigital.di/ , "DiGital").replace(/Pcforalla.idg/ , "PC för Alla").replace(/Macworld.idg/ , "MacWorld").replace(/Computersweden.idg/ , "Computer Sweden").replace(/Skaraborgslanstidning/ , "Skaraborgs Läns Tidning").replace(/Sweclockers.com/ , "SweClockers").replace(/Dn/ , "DN").replace(/Di/, "Dagens Industri").replace(/Svt/, "SVT").replace(/Sverigesradio/, "Sveriges Radio").replace(/Dagensmedicin/, "Dagens Medicin").replace(/Bohuslaningen/, "Bohusläningen").replace(/M3.idg/, "M3 - IDG").replace(/Vaxjolakers/, "Växjö Lakers")
      )
    }
    
    return (
        <Card onPress={() => Linking.openURL(url)} delayPressIn={150}>

            <NewsTitleContainer>
              <Source>{checkUrl(source.name)}</Source>
              <Headline numberOfLines={3}>{title}</Headline>
              <Content numberOfLines={3}>{description}</Content>
              <Published>{time_ago(new Date(publishedAt))}</Published>
            </NewsTitleContainer>
            <Img source={{uri: urlToImage}}/>

        </Card>
    )
}
 
export default NewsCard;