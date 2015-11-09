import unittest
import scoreFunctions

class scoreFunctionsTest(unittest.TestCase):

    #The test_Array is an array the user would like to pass into the given function, the sum_Number is only for the OneToSix_Sum (c value),
    #and expected_Score is the score we are expecting the function to return after we give it a certain array.

    def test_OneToSix_Sum(self):
        test_Array = [4, 4, 2, 3, 5]
        sum_Number = 4
        expected_Score = 8
        #Checks if the score returned from the given function is equal to our expected score, and if it isn't then it prints "Incorrect score"
        self.assertEqual(scoreFunctions.OneToSix_Sum(sum_Number, test_Array), expected_Score, "Incorrect score")

    def test_Small_Straight(self):
        test_Array = [1, 4, 6, 5, 3]
        expected_Score = 30

        self.assertEqual(scoreFunctions.Small_Straight(test_Array), expected_Score, "Incorrect score")

    def test_Large_Straight(self):
        test_Array = [3, 4, 6, 5, 2]
        expected_Score = 40

        self.assertEqual(scoreFunctions.Large_Straight(test_Array), expected_Score, "Incorrect score")

    def test_Full_House(self):
        test_Array = [4, 3, 4, 3, 4]
        expected_Score = 25

        self.assertEqual(scoreFunctions.Full_House(test_Array), expected_Score, "Incorrect score")

    def test_Three_OAK(self):
        test_Array = [4, 4, 2, 3, 4]
        expected_Score = 17

        self.assertEqual(scoreFunctions.Three_OAK(test_Array), expected_Score, "Incorrect score")

    def test_Four_OAK(self):
        test_Array = [4, 4, 2, 4, 4]
        expected_Score = 18

        self.assertEqual(scoreFunctions.Four_OAK(test_Array), expected_Score, "Incorrect score")

    def test_Five_OAK(self):
        test_Array = [3, 3, 3, 3, 3]
        expected_Score = 50

        self.assertEqual(scoreFunctions.Five_OAK(test_Array), expected_Score, "Incorrect score")


if __name__ == '__main__':
    unittest.main()








