package com.drum.chu;

import android.os.Bundle;
import android.view.Menu;
import org.apache.cordova.*;
import com.parse.Parse;
import com.parse.ParseAnalytics;

public class MainActivity extends DroidGap {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/createuser.html");
		Parse.initialize(this, "L77teeeXm18eO71DH5TPEicWQ8Njyear57tpEHVc", "FOHNzccjji3i7KNjlYtNXnjBKZjhAiXDVBH0SzAJ");
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		//getMenuInflater().inflate(R.menu.MainActivity, menu);
		return true;
	}

}