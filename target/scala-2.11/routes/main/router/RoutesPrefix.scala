
// @GENERATOR:play-routes-compiler
// @SOURCE:/home/irfank/Play_applications/restaurant_abh/conf/routes
// @DATE:Wed May 25 13:25:27 CEST 2016


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
