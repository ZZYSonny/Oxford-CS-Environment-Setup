# IDEA Setup

Create a new sbt project in IDEA. Wait until setup finishes.

## Intellij Setup

To be updated

### ~~Modifying CSO from 2.12~~ Note only, don't use
For me, the reason to migrate old CSO source to 2.13 is showing documentation popup for each function in IDEA. However, there are numerous problems met and thus not recommended for daily use. 

#### Compilation Notice
Like the 2.12 version. First you need to compile two macro file. Then while compiling the rest, this jar needs to be included in classpath.

``` bash
scalac **/control.scala **/SourceLocation.scala -d macros.jar -feature -language:implicitConversions -language:postfixOps
```

#### Migrate Syntax
Original Source From https://www.cs.ox.ac.uk/people/bernard.sufrin/personal/CSO/2.12.3

- Postfix like `List(123) size ()` confuses with infix in 2.13. But a workaround is adding a function accepting unit. So I added `def ?(unit:Unit):T = ?()` in `io.threadcso.channel.InPort[+T]`
- Seq[T] is now immutable.Seq[T].
    - File `io.threadcso.debug.Logger` Class `Logger` Function `events` is effected. I add `.toList` to convert the `mutable.Queue` to a `immutable.Seq`
    - File `io.threadcso.semaphore.LockFreeDequeue` Function `elements`. I use `it.asScala.toList` to convert
- Moved a few @elidable annotation according to the compiler. Compiler Error was `Only concrete methods can be marked`

#### Missing class
Some class in latest version are missing in the old source file, which is important for the practical. You will need to extract these class files out, put it with the lib.