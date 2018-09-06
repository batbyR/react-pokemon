import React from "react";
import {add} from "./StringCalculator.js";

describe("Tests for StringCalculator", () => {
  it("Should return O if empty string", () => {
    expect(add("")).toEqual(0);
  });
  it("Should return the number if one number", () => {
    expect(add("5")).toEqual(5);
  });
  it("Should return the addition if two numbers", () => {
    expect(add("5,6")).toEqual(11);
  });
  it("Should return the addition whatever the numbers", () => {
    expect(add("5,6,0,2")).toEqual(13);
    expect(add("5,6,0,2,4,7,8")).toEqual(32);
  });
  it("Should handle newline instead of commas", () => {
    expect(add("1\n2,3")).toEqual(6);
  });
  it("Should handle a specified one character delimeter", () => {
    expect(add("//[a]\n1a2")).toEqual(3);
  });
  it("Should handle a specified more than one character delimeter", () => {
    expect(add("//[***]\n1***2***3")).toEqual(6);
  });
  it("Should not allowed a negative number", () => {
    expect(add("1,-3")).toEqual("negatives not allowed: -3");
  });
  it("Should show all negatives number in the message", () => {
    expect(add("-1,-3")).toEqual("negatives not allowed: -1 -3");
  });
  it("Should not consider numbers bigger thant 1000", () => {
    expect(add("1001,2")).toEqual(2);
  });
  it("Should allow multiple delimeters", () => {
    expect(add("//[*][%]\n1*2%3")).toEqual(6);
  });
  it("Should allow multiple delimeters with length longer than one", () => {
    expect(add("//[***][%/]\n1***2%/3")).toEqual(6);
  });
});
