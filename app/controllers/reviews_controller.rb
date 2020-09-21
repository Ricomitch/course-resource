# module Api
#   module V1
    class ReviewsController < ApplicationController
          before_action :set_review, only: [:update, :destroy]



      # GET /reviews
      # def index
      #   @reviews = Review.all
    
      #   render json: @reviews
      # end
    
      # GET /reviews/1
      # def show
      #   render json: @review
      # end

      
    
      # POST /reviews
      def create
        review = course.reviews.new(review_params)
    
        if review.save
          render json: ReviewSerializer.new(review).serialized_json
        else
          render json: { error: review.errors.messages }, status: 422
        end
      end
    
      # PATCH/PUT /reviews/1
      def update
        if @review.update(review_params)
          render json: @review
        else
          render json: @review.errors, status: :unprocessable_entity
        end
      end
    
      # DELETE /reviews/1
      def destroy
        @review = Review.find(params[:id])

       if @review.destroy
        head :no_content
       else
        render json:  { error: review.errors.messages }, status: 422
       end
      end
    
      private
        # Use callbacks to share common setup or constraints between actions.
        def set_review
          @review = Review.find(params[:id])
        end

        def course
          @course ||= Course.find(params[:course_id])
        end
    
        # Only allow a trusted parameter "white list" through.
        def review_params
          params.require(:review).permit(:title, :description, :score, :course_id)
        end
    end
    
  #  end
  # end

