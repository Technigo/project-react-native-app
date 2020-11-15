import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: 'rgba(128,128,128, 0.5)'
`

export const Card = styled.View`
  margin: 10px
  background: rgb(219,228,238)
  border-radius: 10px
  padding: 20px
  box-shadow: 3px 3px
  shadow-color: grey
`

export const ArticleImage = styled.Image `
  margin: 10px
  border-radius: 20px
`

export const ImageContainer = styled.View `
  align-items: center
  padding-top: 10px
`
export const TitleText = styled.Text `
  margin-top:10px
  font-size: 20px
  text-align: justify
`

export const AuthorName = styled.Text `
  margin-top: 10px
  letter-spacing: 2px
`
export const TimedText = styled.Text `
  margin-top: 10px
  color: red
  font-size: 15px
  text-align: right
  margin-bottom: 20px
`
export const ReadMore = styled.Button`
  font-size : 20px
  padding-top: 15px
`