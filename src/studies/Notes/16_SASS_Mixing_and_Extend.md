# SASS: Mixing and Extend

## Introduction  
In this lesson, I learned about advanced features of SASS that help avoid code repetition in more complex styles: mixins and extend.

## Mixin  
A mixin is like a function that allows the creation of reusable style blocks with varied behaviors through parameters. For example:  

```scss
@mixin flex($gap: 2rem) {
    display: flex;
    flex-direction: column;
    gap: $gap;
}
```

This mixin defines properties for `display` and `flex-direction` while allowing flexibility in the `gap` value. It can be applied using:  

```scss
@include flex($gap: 4rem);
```

The mixin can be reused as many times as needed. Another example from the documentation demonstrates applying themes:  

```scss
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```

## Extend  
The `@extend` feature also prevents code repetition but does not allow varied behavior through parameters. Instead, it uses placeholder selectors with fixed property values.  

Example:  

```scss
%flex {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.my-class {
    @extend %flex;
}
```

The extend can also be reused multiple times. From the documentation:  

```scss
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

## Conclusion  
This lesson introduced me to two powerful SASS features: mixins and extend. Both are essential tools to create cleaner, reusable, and more efficient styles. For deeper learning, consulting the [documentation](https://sass-lang.com/documentation/) is highly recommended!