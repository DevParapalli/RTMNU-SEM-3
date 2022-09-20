import java.util.logging.Logger;

public class LoggingStuff {
    public static void main(String[] args) {
        Logger logger = Logger.getLogger(LoggingStuff.class.getName());
        // Info Level
        logger.info("Information"); // Information only, no error.
        // Warning Level
        logger.warning("Warning"); // Something is wrong, but not critical.
        // Severe Level
        logger.severe("Severe"); // Something is wrong, and critical.
        
    }
}
