package com.example.hellofx;

import javafx.application.Application;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.stage.Stage;

import java.io.IOException;

public class HelloApplication extends Application {
    @Override
    public void start(Stage stage) {

        // Create a label
        Label label = new Label("🎉 JavaFX is REALLY working!");
        label.setFont(new Font("Arial", 22));
        label.setTextFill(Color.WHITE);

        // Create a layout with background color
        StackPane root = new StackPane(label);
        root.setAlignment(Pos.CENTER);
        root.setStyle("-fx-background-color: linear-gradient(to bottom right, #4facfe, #00f2fe);");

        // Create the scene
        Scene scene = new Scene(root, 400, 250);

        stage.setTitle("JavaFX Color Test");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}