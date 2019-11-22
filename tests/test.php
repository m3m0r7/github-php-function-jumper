<?php

class A extends \Exception implements ArrayAccess
{

  /**
   * @return Exception
   */
  private $phpdocTest1;

  /**
   * @var Exception
   */
  private $phpdocTest2;

  /**
   * A constructor.
   * @param string $message
   * @param int $code
   * @param Throwable|null $previous
   */
  public function __construct($message = "", $code = 0, Throwable $previous = null)
  {
    parent::__construct($message, $code, $previous);

    // Normal
    var_dump('test');
    var_dump("$message");
    var_dump(\Exception::class);
    var_dump(ReflectionClass::export($this));
    var_dump(microtime(true));
    try {
      $reflection = new ReflectionClass($this);
      var_dump($reflection->getName());


      $reflection = $reflection2 = new ReflectionClass($this);
      var_dump($reflection2->getName());


      $reflection = $reflection2 = new ReflectionMethod($reflection, '__construct');
      var_dump($reflection2->isPublic());
    } catch (Exception $e) {

    }

    // Dirty codes
    var_dump  ('test');
    var_dump
    ('test');

    ReflectionClass  ::export($this);
    ReflectionClass::  export($this);
    ReflectionClass::
    export($this);

    ReflectionClass
      ::export($this);


    $reflection = new ReflectionClass  ($this);
    $reflection = $reflection2 = new ReflectionClass  ($this);

    try {
      $reflection =
        new
        ReflectionClass($this);
      var_dump($reflection
        ->getName());
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
