package controller;

import connection.DbConnection;
import javafx.event.ActionEvent;
import javafx.scene.control.Alert;
import javafx.scene.control.ButtonType;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import model.Details;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MainPageController {



    public TextField lblName;
    public TextField lblActivity;
    public TextField lblDes;
    public Label lblDate;
    public Label lblTime;


    public void initialize(){
        lblName.requestFocus();
        SimpleDateFormat formatter = new SimpleDateFormat("HH:mm");
        Date date = new Date();
        lblTime.setText(formatter.format(date));
        lblName.requestFocus();
        SimpleDateFormat f = new SimpleDateFormat("dd/MM/yyyy");
        Date datef= new Date();
        lblDate.setText(f.format(datef));


    }


    public void btnGetReportOnAction(ActionEvent actionEvent) {



       }




    public void btnSaveOnAction(ActionEvent actionEvent) throws SQLException, ClassNotFoundException {

        Details details =new Details(lblActivity.getText(),lblName.getText(),lblDes.getText(),lblDate.getText(),lblTime.getText());

        if(saveCus(details)) {


            new Alert(Alert.AlertType.CONFIRMATION,"Customer Update Successfully", ButtonType.OK).show();

            clear();
            success();


        }else{

            new Alert(Alert.AlertType.WARNING,"Try Again!", ButtonType.OK).show();
            clear();

        }






    }

    public boolean saveCus(Details details) throws SQLException, ClassNotFoundException {


        PreparedStatement stm = DbConnection.getInstance().getConnection().prepareStatement("INSERT INTO details VALUES (?,?,?,?,?)");

        stm.setObject(1,details.getActivity());
        stm.setObject(2,details.getName());
        stm.setObject(3,details.getDes());
        stm.setObject(4,details.getDate());
        stm.setObject(5,details.getTime());
        System.out.println(stm);

        return stm.executeUpdate()>0;

    }



    public void clear(){

      lblName.clear();
      lblActivity.clear();
      lblDes.clear();
      lblName.requestFocus();

    }


    public void success(){

        lblName.requestFocus();
        lblName.setStyle("-fx-border-color: #2ecc71");
        lblDes.setStyle("-fx-border-color: #2ecc71");
        lblActivity.setStyle("-fx-border-color: #2ecc71");

    }



}
