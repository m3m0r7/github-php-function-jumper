<?php

class A extends \Exception implements ArrayAccess
{
  public function __construct($message = "", $code = 0, Throwable $previous = null)
  {
    parent::__construct($message, $code, $previous);
    var_dump('test');
    var_dump(\Exception::class);
    var_dump(ReflectionClass::export($this));
    try {
      $reflection = new ReflectionClass($this);
      var_dump($reflection->getName());
    } catch (Exception $e) {

    }

  }

  public function offsetUnset($offset)
  {
  }

  public function offsetSet($offset, $value)
  {
  }

  public function offsetGet($offset)
  {
  }

  public function offsetExists($offset)
  {
    return isset($this->items[$offset]);
  }
}
