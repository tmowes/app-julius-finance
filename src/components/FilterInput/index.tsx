import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react'
import { useField } from '@unform/core'

import { Container, TextInput, IconContainer, Icon } from './styles'
import { InputRef, InputValueRefProps, InputProps } from './types'

const FilterInput: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, containerStyle = {}, icon, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null)
  const { fieldName, defaultValue = '', error, registerField } = useField(name)
  const inputValueRef = useRef<InputValueRefProps>({ value: defaultValue })

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputValueRef.current?.value)
  }, [])

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    },
  }))

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_, value) {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({ text: value })
      },
      clearValue() {
        inputValueRef.current.value = ''
        inputElementRef.current.clear()
      },
    })
  }, [fieldName, registerField])

  return (
    <Container
      style={[containerStyle, { elevation: 24 }]}
      isErrored={!!error}
      isFocused={isFocused}
    >
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#717885"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={value => {
          inputValueRef.current.value = value
        }}
        {...rest}
      />

      <IconContainer>
        <Icon name={icon} size={26} color="#F2F3F8" />
      </IconContainer>
    </Container>
  )
}

export default forwardRef(FilterInput)
