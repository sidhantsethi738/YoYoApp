using System;
using System.Collections.Generic;
using System.Text;
using YoYoBusinessEntities;

namespace YoYoBusinessLogic
{
  public  class Fitness : IFitness
    {

      public  List<Sportsperson> GetSportPerson()
        {
            return new List<Sportsperson> {
        new Sportsperson () {  ID = 1, name = "Ron"},
        new Sportsperson () {  ID = 2, name = "Randy"},
        new Sportsperson () {  ID = 3, name = "Mandy"},
        new Sportsperson () {  ID = 4, name = "Bolt"},
        new Sportsperson () {  ID = 5, name = "Shawn"},
        new Sportsperson () {  ID = 6, name = "Sidhant"},
        new Sportsperson () {  ID = 7, name = "Casper"},
        new Sportsperson () {  ID = 8, name = "Anders"},
        new Sportsperson () {  ID = 9, name = "Nikhil"},
        new Sportsperson () {  ID = 10, name = "Shweta"},
        new Sportsperson () {  ID = 11, name = "Ritika"},
        new Sportsperson () {  ID = 12, name = "Rohit"},
        new Sportsperson () {  ID = 13, name = "Mohit"},
        new Sportsperson () {  ID = 14, name = "Shan"},
        new Sportsperson () {  ID = 15, name = "Mohan"}
    };
        }
    }
}
