import React from 'react'
import Loader from './Loader'

const DEFAULT_CLASS_NAME = 'react-load-mask'

const notEmpty = s => !!s

export default class LoadMask extends React.Component {

  render(){
    const props = this.props

    const visibleClassName = props.visible ? `${DEFAULT_CLASS_NAME}--visible`: ''
    const className = [
      props.className,
      DEFAULT_CLASS_NAME,
      visibleClassName,
      props.theme && `${DEFAULT_CLASS_NAME}--theme-${props.theme}`
    ].filter(notEmpty).join(' ')

    const divRenderProps = this.prepareDivProps(props)

    return <div {...divRenderProps} className={className}>
      <Loader size={props.size} theme={props.theme} />
    </div>
  }

  prepareDivProps(props) {
    const {visible, theme, size, className, ...rest} = props
    return {...rest}
  }
}

LoadMask.defaultProps = {
  visible: false,
  theme: 'default'
}
