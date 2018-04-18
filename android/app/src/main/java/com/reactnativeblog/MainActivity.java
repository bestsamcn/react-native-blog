package com.reactnativeblog;
import android.os.Bundle;
import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen; // HERE

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeBlog";
    }

    @Override                                                   // HERE
    protected void onCreate(Bundle savedInstanceState) {        // HERE
        SplashScreen.show(this, true);     // HERE                     
        super.onCreate(savedInstanceState);                     // HERE
    }
}
